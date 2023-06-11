package com.backend.moaba.service;

import com.backend.moaba.repository.TypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TypeService {

    public TypeRepository typeRepository;

    @Autowired
    public void setTypeRepository(TypeRepository typeRepository){
        this.typeRepository = typeRepository;
    }

    public Long FindID(String qtype){
        System.out.println(qtype);
        System.out.println(typeRepository.FindByType(qtype));
        return typeRepository.FindByType(qtype);
    }

    public String FindTypeByID(Long qid){
        return typeRepository.FindTypeByID(qid);
    }
}
