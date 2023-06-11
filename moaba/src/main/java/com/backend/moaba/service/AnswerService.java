package com.backend.moaba.service;

import com.backend.moaba.entity.Answer;
import com.backend.moaba.repository.AnswerRepository;
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

    public void Save(Long uid, Long boxid, String str){
        Answer answer = new Answer();

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
}
