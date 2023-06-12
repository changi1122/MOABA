package com.backend.moaba.service;

import com.backend.moaba.entity.Answer;
import com.backend.moaba.entity.QustBoxList;
import com.backend.moaba.repository.AnswerRepository;
import com.backend.moaba.repository.QustBoxListRepository;
import com.backend.moaba.repository.QustBoxRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnswerService {

    private AnswerRepository answerRepository;

    @Autowired
    public void setAnswerRepository(AnswerRepository answerRepository){
        this.answerRepository = answerRepository;
    }

    private QustBoxRepository  qustBoxRepository;
    @Autowired
    public void setQustBoxRepository(QustBoxRepository qustBoxRepository){
        this.qustBoxRepository = qustBoxRepository;
    }

    private QustBoxListRepository qustBoxListRepository;
    @Autowired
    public void setQustBoxListRepository(QustBoxListRepository qustBoxListRepository){
        this.qustBoxListRepository =  qustBoxListRepository;
    }

    public void Save(Long uid, Long boxid, String str){
        Answer answer = new Answer();

        System.out.println(uid + ' ' + boxid + " " + str);

        answer.setUid(uid);
        answer.setBoxid(boxid);
        if(str != null){
            answer.setAnswer(str);
        }

        answerRepository.save(answer);
    }

    public List<Answer> GetAllAnswer(Long boxid){
        return answerRepository.FindAllbyBoxId(boxid);
    }

    public Integer CountALLAnswer(Long qid){
        Integer sum = 0;
        List<Long> questionBoxIDlist = qustBoxRepository.FindQuestionIDByQuestionID(qid);
        for (Long questionBoxId : questionBoxIDlist) {
            List<QustBoxList> boxList = qustBoxListRepository.FindtitlesByBoxID(questionBoxId);
            for (QustBoxList box : boxList) {
                sum += answerRepository.CountbyBoxId(box.getId());
            }
        }

        return (questionBoxIDlist.size() == 0) ? 0 : sum / questionBoxIDlist.size();
    }

    public Integer CountByBoxId(Long boxid) {
        return answerRepository.CountbyBoxId(boxid);
    }
}
