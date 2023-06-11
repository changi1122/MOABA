package com.backend.moaba.service;

import com.backend.moaba.entity.QustBoxList;
import com.backend.moaba.repository.QustBoxListRepository;
import com.backend.moaba.repository.QustBoxRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QustBoxListService {

    private QustBoxListRepository qustBoxListRepository;

    @Autowired
    public void setQustBoxListRepository(QustBoxListRepository qustBoxListRepository){
        this.qustBoxListRepository = qustBoxListRepository;
    }

    public Long SaveQustBoxList(String title, Long boxid){
        QustBoxList qustBoxList = new QustBoxList();
        qustBoxList.setQust_boxid(boxid);
        qustBoxList.setTitle(title);

        return qustBoxListRepository.save(qustBoxList).getId();
    }

    public List<QustBoxList> FindtitleByboxid(Long bid){
        return qustBoxListRepository.FindtitlesByBoxID(bid);
    }

}
