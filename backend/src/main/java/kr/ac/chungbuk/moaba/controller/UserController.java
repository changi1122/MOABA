package kr.ac.chungbuk.moaba.controller;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import kr.ac.chungbuk.moaba.model.User;
import kr.ac.chungbuk.moaba.service.UserService;
import kr.ac.chungbuk.moaba.utility.Security;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@Controller
public class UserController {
    private UserService userService;

    @Autowired
    public UserController(UserService userService)
    {
        this.userService = userService;
    }

    @PostMapping(path = "/api/login")
    public ResponseEntity login(final HttpServletRequest req,
                                final HttpServletResponse res,
                                @RequestBody Map<String, String> request) throws Exception {

        try {
            String token = userService.tryLogin(request.get("username"), request.get("password"));
            Cookie tokenCookie = createTokenCookie(token, 168 * 60 * 60);
            res.addCookie(tokenCookie);

            HashMap<String, Object> result = new HashMap<>();
            result.put("result", true);
            return new ResponseEntity(result, HttpStatus.OK);
        }
        catch(Exception e) {
            Cookie tokenCookie = createTokenCookie(null, 0);
            res.addCookie(tokenCookie);

            HashMap<String, Object> result = new HashMap<>();
            result.put("result", false);
            return new ResponseEntity(result, HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping(path = "/api/logout")
    public ResponseEntity logout(final HttpServletRequest req, final HttpServletResponse res) {
        Cookie tokenCookie = createTokenCookie(null, 0);
        res.addCookie(tokenCookie);

        HashMap<String, Object> result = new HashMap<>();
        result.put("result", "로그아웃에 성공하였습니다.");
        return new ResponseEntity(result, HttpStatus.OK);
    }

    @GetMapping(path = "/api/currentuser")
    public ResponseEntity getCurrentUserData() {
        HashMap<String, Object> result = new HashMap<>();

        String username = Security.getCurrentUsername();

        result.put("username", username);
        result.put("Authorities", Security.getCurrentUserRole());

        try {
            User currentUser = (User)userService.loadUserByUsername(username);
            result.put("userId", currentUser.getId());
            result.put("role", currentUser.getRole());
            result.put("email", currentUser.getEmail());
        } catch (Exception e){
            // 로그인되지 않았거나 오류난 경우
        }

        return new ResponseEntity(result, HttpStatus.OK);
    }

    @PostMapping("/api/signup")
    public ResponseEntity createUser(@RequestParam("username") String username,
                                     @RequestParam("password") String password,
                                     @RequestParam("email") String email) {
        if (username != null && !username.isBlank() && username.matches("^[a-zA-Z0-9_]{6,25}$") &&
            password != null && !password.isBlank() && email != null && !email.isBlank() &&
            email.matches("^(([^<>()\\],;:\\s@]+(\\.[^<>()\\],;:\\s@]+)*)|(.+))@(([^<>()\\,;:\\s@]+\\.)+[^<>()\\,;:\\s@]{2,})$")) {

            try {
                userService.create(
                        username,
                        password,
                        email
                );

                HashMap<String, Object> result = new HashMap<>();
                result.put("result", "회원가입에 성공하였습니다.");
                return new ResponseEntity(result, HttpStatus.CREATED);
            }
            catch (Exception e) {
                HashMap<String, Object> result = new HashMap<>();
                result.put("result", "회원가입에 실패하였습니다.");
                return new ResponseEntity(result, HttpStatus.BAD_REQUEST);
            }
        }
        else {
            HashMap<String, Object> result = new HashMap<>();
            result.put("result", "회원가입에 실패하였습니다.");
            return new ResponseEntity(result, HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/api/user/{username}")
    public ResponseEntity updateUser(@PathVariable("username") String username,
                                     @RequestBody Map<String, String> body) {
        if (!username.isBlank() && username.equals(Security.getCurrentUsername()) &&
                body.get("password") != null && !body.get("password").isBlank()) {

            try {
                userService.update(
                        username,
                        body.get("password"),
                        body.get("newPassword"),
                        body.get("email")
                );

                HashMap<String, Object> result = new HashMap<>();
                result.put("result", "회원 정보 수정에 성공하였습니다.");
                return new ResponseEntity(result, HttpStatus.ACCEPTED);
            }
            catch (Exception e) {
                HashMap<String, Object> result = new HashMap<>();
                result.put("result", "회원 정보 수정에 실패하였습니다.");
                return new ResponseEntity(result, HttpStatus.BAD_REQUEST);
            }
        }
        else {
            HashMap<String, Object> result = new HashMap<>();
            result.put("result", "회원 정보 수정에 실패하였습니다.");
            return new ResponseEntity(result, HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/api/user/{username}")
    public ResponseEntity deleteUser(@PathVariable("username") String username) {
        if (!username.isBlank() && username.equals(Security.getCurrentUsername())) {
            try {
                userService.delete(username);

                HashMap<String, Object> result = new HashMap<>();
                result.put("result", "회원 정보 삭제에 성공하였습니다.");
                return new ResponseEntity(result, HttpStatus.ACCEPTED);
            }
            catch (Exception e) {
                HashMap<String, Object> result = new HashMap<>();
                result.put("result", "회원 정보 삭제에 실패하였습니다.");
                return new ResponseEntity(result, HttpStatus.BAD_REQUEST);
            }
        }
        else {
            HashMap<String, Object> result = new HashMap<>();
            result.put("result", "회원 정보 삭제에 실패하였습니다.");
            return new ResponseEntity(result, HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/api/checkforduplicate")
    @ResponseBody
    public ResponseEntity CanUseAsUsername(@RequestBody Map<String, String> body) {
        if (body.get("username") != null && !body.get("username").isBlank() &&
                body.get("username").matches("^[a-zA-Z0-9_]{6,25}$") &&
                userService.canUseAsUsername(body.get("username"))) {
            HashMap<String, Object> result = new HashMap<>();
            result.put("result", true);
            return new ResponseEntity(result, HttpStatus.OK);
        }
        else {
            HashMap<String, Object> result = new HashMap<>();
            result.put("result", false);
            return new ResponseEntity(result, HttpStatus.OK);
        }
    }

    @PostMapping("/api/findusername")
    @ResponseBody
    public ResponseEntity findUsername(@RequestBody Map<String, String> body) {
        try {
            if (body.get("email") == null || body.get("email").isBlank())
                throw new Exception();

            HashMap<String, Object> result = new HashMap<>();
            result.put("result", userService.findUsernameByEmail(body.get("email")));
            return new ResponseEntity(result, HttpStatus.OK);
        }
        catch (Exception e) {
            HashMap<String, Object> result = new HashMap<>();
            result.put("result", "");
            return new ResponseEntity(result, HttpStatus.OK);
        }
    }

    private Cookie createTokenCookie(String token, int age) {
        Cookie cookie = new Cookie("at", token);
        cookie.setHttpOnly(true);
        cookie.setMaxAge(age);
        cookie.setPath("/");
        return cookie;
    }
}
