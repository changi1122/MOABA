package com.backend.moaba.service;

import com.backend.moaba.entity.Matching;
import com.backend.moaba.repository.CategoryRepository;
import com.backend.moaba.repository.MatchingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MatchingService {

    private MatchingRepository matchingRepository;

    @Autowired
    public void setMatchingRepository(MatchingRepository matchingRepository){
        this.matchingRepository = matchingRepository;
    }

    private CategoryRepository categoryRepository;
    @Autowired
    public void setCategoryRepository(CategoryRepository categoryRepository){
        this.categoryRepository = categoryRepository;
    }

    public void SavePreferCategory(Long qid, String str){
        Long cid = categoryRepository.FindIDbyStr(str);
        Matching matching = new Matching();
        matching.setCtgyid(cid);
        matching.setQid(qid);

        matchingRepository.save(matching);
    }

    public List<String> GetPreferCategory(Long qid){
        List<Long>list =   matchingRepository.FindCtgyidbyQid(qid);
        List<String> categories = new ArrayList<String>();
        for(int i=0; i<list.size(); i++){
            System.out.println(categoryRepository.FindCtgytypeById(list.get(i)));
            categories.add(categoryRepository.FindCtgytypeById(list.get(i)));
        }
        return categories;
    }
}
