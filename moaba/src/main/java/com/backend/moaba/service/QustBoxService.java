package com.backend.moaba.service;

import com.backend.moaba.entity.Question;
import com.backend.moaba.entity.QustBox;
import com.backend.moaba.repository.QustBoxRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class QustBoxService {
    private QustBoxRepository qustBoxRepository;

    @Autowired
    public void setQustBoxRepository(QustBoxRepository qustBoxRepository){
        this.qustBoxRepository = qustBoxRepository;
    }

    public Long SaveQustBox(Long qid, String title, Long type){
        QustBox qustBox = new QustBox();
        qustBox.setQuestionid(qid);
        qustBox.setTitle(title);
        qustBox.setQuestiontype(type);

        return qustBoxRepository.save(qustBox).getId();
    }

    public List<QustBox> GetQuestionList(Long qid){
        return qustBoxRepository.FindByQuestionID(qid);
    }

}
