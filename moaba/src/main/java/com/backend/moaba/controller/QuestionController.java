package com.backend.moaba.controller;


import com.backend.moaba.dto.QustBoxDTO;
import com.backend.moaba.entity.Question;
import com.backend.moaba.entity.QustBox;
import com.backend.moaba.repository.QustBoxListRepository;
import com.backend.moaba.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;


@RequestMapping("/api")
@RestController
public class QuestionController {

    private QuestionService questionService;
    @Autowired
    public void setQuestionService(QuestionService questionService){
        this.questionService = questionService;
    }

    private QustBoxService qustBoxService;
    @Autowired
    public void setQustBoxService(QustBoxService qustBoxService){
        this.qustBoxService = qustBoxService;
    }

    private QustBoxListService qustBoxListService;
    @Autowired
    public void setQustBoxListRepository(QustBoxListService qustBoxListService){
        this.qustBoxListService = qustBoxListService;
    }

    private TypeService typeService;
    @Autowired
    public void setTypeService(TypeService typeService){
        this.typeService = typeService;
    }

    private MatchingService matchingService;
    @Autowired
    public void setMatchingService(MatchingService matchingService){
        this.matchingService = matchingService;
    }


    @PostMapping("/save")
    public Long SaveQuestion(@RequestBody ArrayList<HashMap<String, Object>> list){

        System.out.println(list);

        Long qid = questionService.SaveHeader((String) list.get(0).get("title"), (String) list.get(0).get("content"), (String) list.get(2).get("dueDate"), (String) list.get(2).get("enddate"));

        List ctgylist = (List) list.get(1).get("type");
        for(int i=0; i<ctgylist.size(); i++){
            System.out.println(ctgylist.get(i));
            matchingService.SavePreferCategory(qid, (String) ctgylist.get(i));
        }

        for(int i=2; i<list.size(); i++){

            Long cid = typeService.FindID((String) list.get(i).get("answerType"));

            Long qbid = qustBoxService.SaveQustBox(qid, (String) list.get(i).get("question"), cid);

            List list1 = (List) list.get(i).get("answers");
            System.out.println(list1);
            for(int j=0; j<list1.size(); j++){
                qustBoxListService.SaveQustBoxList((String) list1.get(j), qbid);
            }
        }

        return qid;
    }

    @PostMapping("/get/header")
    public HashMap<String, Object> GetQuestionHeader(@RequestBody HashMap<String, Object> hashMap){
        String qid  = (String) hashMap.get("qid");

        HashMap<String, Object> hashMapped = new HashMap<String, Object>();
        Question question =  questionService.GetQuestion(Long.valueOf(qid));
        hashMapped.put("info", question);

        return hashMapped;
    }


    @PostMapping("/get/list")
    public  List<QustBoxDTO> GetQuestionBody(@RequestBody HashMap<String, Object> hashMap){
        System.out.println(hashMap.get("qid"));
        String id  = (String) hashMap.get("qid");

        ArrayList<HashMap<String, Object>> arrayList = new ArrayList<HashMap<String, Object>>();

        List<QustBox> qlist = qustBoxService.GetQuestionList(Long.valueOf(id));

        System.out.println(qlist);
        System.out.println(qlist.get(1).getQuestiontype());

        List<QustBoxDTO> list = new ArrayList<QustBoxDTO>();

        for(int i=0; i<qlist.size(); i++){
            QustBoxDTO qustBoxDTO = new QustBoxDTO();
            System.out.println("type :" + typeService.FindTypeByID(qlist.get(i).getQuestiontype()));
            String istype = typeService.FindTypeByID(qlist.get(i).getQuestiontype());
            System.out.println(qustBoxListService.FindtitleByboxid(qlist.get(i).getId()));
            List<String> strings = qustBoxListService.FindtitleByboxid(qlist.get(i).getId());

            qustBoxDTO.setTitle(qlist.get(i).getTitle());
            qustBoxDTO.setQuestiontype(istype);
            qustBoxDTO.setList(strings);

            list.add(qustBoxDTO);
            System.out.println(qustBoxDTO);
        }

        System.out.println("list is : " + list.get(0) + " "+ list.get(1));

        return list;
    }
}
