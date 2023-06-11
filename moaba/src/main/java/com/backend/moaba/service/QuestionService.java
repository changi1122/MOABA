package com.backend.moaba.service;

import com.backend.moaba.entity.Question;
import com.backend.moaba.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class QuestionService {

    private QuestionRepository questionRepository;

    @Autowired
    public void setQuestionRepository(QuestionRepository questionRepository){
        this.questionRepository = questionRepository;
    }

    public Long SaveHeader(String title, String content, String DueDate, String EndDate){

        System.out.println(EndDate+"sdfsdfsdfsfsdfsdfsdf");
        Question question = new Question();
        question.setUserid(1L);
        question.setTitle(title);
        question.setContent(content);
        question.setSchedule_data (DueDate);
        question.setEnd_date(EndDate);

        Long id  = questionRepository.save(question).getId();

        return id;
    }

    public Question GetQuestion(Long qid){
        return questionRepository.findById(qid).get();
    }

    public List<Question> GetAllQuestion(Long uid){
        return questionRepository.GetAll(uid);
    }
}
