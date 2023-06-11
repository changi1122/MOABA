package com.backend.moaba.controller;


import com.backend.moaba.dto.*;
import com.backend.moaba.entity.Question;
import com.backend.moaba.entity.QustBox;
import com.backend.moaba.entity.QustBoxList;
import com.backend.moaba.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


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

    private AnswerService answerService;
    @Autowired
    public void setAnswerService(AnswerService answerService){this.answerService = answerService;}


    @PostMapping("/save")
    public Long SaveQuestion(@RequestBody ArrayList<HashMap<String, Object>> list){

        System.out.println(list);

        Long qid = questionService.SaveHeader((String) list.get(0).get("title"), (String) list.get(0).get("content"), (String) list.get(2).get("dueDate"), (String) list.get(2).get("endDate"));

        List ctgylist = (List) list.get(1).get("type");
        for(int i=0; i<ctgylist.size(); i++){
            System.out.println(ctgylist.get(i));
            matchingService.SavePreferCategory(qid, (String) ctgylist.get(i));
        }

        for(int i=3; i<list.size(); i++){

            System.out.println((String) list.get(i).get("answerType"));

            Long cid = typeService.FindID((String) list.get(i).get("answerType"));

            System.out.println(cid);

            Long qbid = qustBoxService.SaveQustBox(qid, (String) list.get(i).get("question"), cid);

            List list1 = (List) list.get(i).get("answers");
            System.out.println(list1);
            for(int j=0; j<list1.size(); j++){
                Long qblid = qustBoxListService.SaveQustBoxList((String) list1.get(j), qbid);
            }
        }

        return qid;
    }

    @PostMapping("/get/header")
    public LinkingTEMPDTO GetQuestionHeader(@RequestBody HashMap<String, Object> hashMap){
        String qid  = (String) hashMap.get("qid");

        LinkingTEMPDTO linkingDTO = new LinkingTEMPDTO();

        Question question =  questionService.GetQuestion(Long.valueOf(qid));

        List<String> categories = matchingService.GetPreferCategory(Long.valueOf(qid));

        linkingDTO.setCategories(categories);
        linkingDTO.setName(question.getTitle());
        linkingDTO.setDueDate(question.getEnd_date());
        linkingDTO.setMeetingDate(question.getSchedule_data());


        List<LQTEMPDTO> lists = new ArrayList<>();

        List<QustBox> qlist = qustBoxService.GetQuestionList(Long.valueOf(qid));

        System.out.println(qlist);
        for(int i=0; i<qlist.size(); i++){
            LQTEMPDTO lqdto = new LQTEMPDTO();
            lqdto.setQuestion(qlist.get(i).getTitle());
            lqdto.setAnswerType(typeService.FindTypeByID(qlist.get(i).getQuestiontype()));
            List<QustBoxList> qustBoxListList = qustBoxListService.FindtitleByboxid(qlist.get(i).getId());

            /* answers & result */
            List<String> answers = new ArrayList<>();
            List<Map<String, Integer>> mapList = new ArrayList<>();

            for(int j = 0; j < qustBoxListList.size(); j++){
                answers.add(qustBoxListList.get(j).getTitle());
                HashMap<String, Integer> map = new HashMap<>();

                map.put(qustBoxListList.get(j).getTitle(), answerService.CountByBoxId(qustBoxListList.get(j).getId()));
                mapList.add(map);
            }
            lqdto.setAnswers(answers);
            lqdto.setResult(mapList);
            lists.add(lqdto);
        }
        linkingDTO.setQuestions(lists);

        return linkingDTO;
    }

    @PostMapping("/get/question")
    public HashMap<String, List<headerDTO>> GetQuestion(@RequestBody HashMap<String, Object> hashMap){
        String uid  = (String) hashMap.get("uid");

        List<Question> questions =  questionService.GetAllQuestion(Long.valueOf(uid));

        System.out.println(questions);

        HashMap<String, List<headerDTO>> data = new HashMap<String, List<headerDTO>>();
        String date ="sd";
        List<String> lists = new ArrayList<>();
        Integer k=-1;
        int i=0;

        while(true){
            List<headerDTO> list = new ArrayList<>();
            while(true){
                if(i == questions.size()){
                    data.put(date, list);
                    break;
                }
                String[] str = questions.get(i).getEnd_date().split("T");
                if(!date.equals(str[0])){
                    lists.add(str[0]);
                    k++;
                    break;
                }
                headerDTO headerDTO = new headerDTO();
                headerDTO.setName(questions.get(i).getTitle());
                String dueDate = questions.get(i).getEnd_date();
                dueDate = dueDate.replace("T", " ");
                headerDTO.setDueDate(dueDate);
                String meeting = questions.get(i).getSchedule_data();
                meeting = meeting.replace("T", " ");
                headerDTO.setMeetingDate(meeting);
                headerDTO.setId(questions.get(i).getId());
                Integer answer =  answerService.CountALLAnswer(questions.get(i).getId());
                headerDTO.setAnswer(answer);

                list.add(headerDTO);
                i++;
            }
            if(i == questions.size()){
                break;
            }
            if(date != "sd"){
                data.put(date, list);
            }
            date= lists.get(k);
        }
        System.out.println(data);

        return data;
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
            List<QustBoxList> strings = qustBoxListService.FindtitleByboxid(qlist.get(i).getId());

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
