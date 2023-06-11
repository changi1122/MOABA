package com.backend.moaba.controller;

import com.backend.moaba.entity.Answer;
import com.backend.moaba.service.AnswerService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@RequestMapping("/api")
@RestController
public class AnswerController {

    private AnswerService answerService;

    public void setAnswerService(AnswerService answerService){
        this.answerService = answerService;
    }

    // 답변저장
    // { "uid" : 유저 ID, "boxid" : 선택한 질문 list의 항목 ID, "answer" : 답변울 객관식, 주관식으로 받을때만 넘기면 됨(default null임)
    @PostMapping("/save/answer")
    public void SaveAnswer(@RequestBody List<HashMap<String, Object>> list){

        for(int i=0; i<list.size(); i++){
            HashMap<String, Object> hashMap = list.get(i);

            String str = (hashMap.get("answer") == null) ? null : (String) hashMap.get("answer");
            answerService.Save((Long) hashMap.get("uid"), (Long) hashMap.get("boxid"), str);

        }
    }

    @PostMapping("/get/all/answer")
    public List<Answer> GetAnswer(@RequestBody HashMap<String, Object> hashMap){
        String boxid  = (String) hashMap.get("qid");

        return answerService.GetAllAnswer(Long.valueOf(boxid));
    }




}
