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

    public void SaveQustBoxList(String title, Long boxid){
        QustBoxList qustBoxList = new QustBoxList();
        qustBoxList.setQust_boxid(boxid);
        qustBoxList.setTitle(title);

        qustBoxListRepository.save(qustBoxList);
    }

    public List<String> FindtitleByboxid(Long bid){
        return qustBoxListRepository.FindtitlesByBoxID(bid);
    }
}
