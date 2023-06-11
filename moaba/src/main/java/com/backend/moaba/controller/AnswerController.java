package com.backend.moaba.controller;

import com.backend.moaba.dto.AnswerDTO;
import com.backend.moaba.entity.Answer;
import com.backend.moaba.service.AnswerService;
import org.springframework.beans.factory.annotation.Autowired;
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

    @Autowired
    public void setAnswerService(AnswerService answerService){
        this.answerService = answerService;
    }

    // 답변저장
    // { "uid" : 유저 ID, "boxid" : 선택한 질문 list의 항목 ID, "answer" : 답변울 객관식, 주관식으로 받을때만 넘기면 됨(default null임)
    @PostMapping("/save/answer")
    public void SaveAnswer(@RequestBody HashMap<String, Object> hashMap){

        System.out.println(hashMap.get("sending"));

        ArrayList arrayList = (ArrayList) hashMap.get("sending");
        System.out.println(arrayList);
        System.out.println(arrayList.get(0));

        for(int i=0; i<arrayList.size(); i++){
            System.out.println(i);
            HashMap<String, String> hashMap1 = (HashMap<String, String>) arrayList.get(i);
            System.out.println(i);
            System.out.println(hashMap1.get("answer")=="null");
            System.out.println(hashMap1.get("uid"));
            answerService.Save( Long.parseLong(hashMap1.get("uid")), Long.parseLong( hashMap1.get("boxid")), hashMap1.get("answer"));

        }
    }

    @PostMapping("/get/all/answer")
    public List<Answer> GetAnswer(@RequestBody HashMap<String, Object> hashMap){
        String boxid  = (String) hashMap.get("qid");

        return answerService.GetAllAnswer(Long.valueOf(boxid));
    }




}
