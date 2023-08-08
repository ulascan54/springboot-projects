package com.project.questapp.services;


import com.project.questapp.entities.Comment;
import com.project.questapp.entities.Like;
import com.project.questapp.entities.Post;
import com.project.questapp.entities.User;
import com.project.questapp.repos.LikeRepository;
import com.project.questapp.requests.LikeCreateRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LikeService {
    private LikeRepository likeRepository;
    private UserService userService;
    private PostService postService;

    public LikeService(LikeRepository likeRepository, UserService userService, PostService postService) {
        this.likeRepository = likeRepository;
        this.userService = userService;
        this.postService = postService;
    }

    public List<Like> getAllLikesWithParams(Optional<Long> userId, Optional<Long> postId) {
            if (userId.isPresent() && postId.isPresent()) {
                return likeRepository.findByUserIdAndPostId(userId.get(), postId.get());
            } else if (userId.isPresent()) {
                return likeRepository.findByUserId(userId.get());
            } else if (postId.isPresent()) {
                return likeRepository.findByPostId(postId.get());
            } else return likeRepository.findAll();
    }

    public Like createOneLike(LikeCreateRequest request) {
        User user = userService.getOneUserById(request.getUserId());
        Post post = postService.getOnePostById(request.getPostId());
        if (user==null && post==null) return null;
        Like toSave = new Like();
        toSave.setId(request.getId());
        toSave.setUser(user);
        toSave.setPost(post);
        likeRepository.save(toSave);
        return toSave;
    }

    public Like getOneLikeById(Long likeId) {
        return likeRepository.findById(likeId).orElse(null);
    }

    public void deleteOneLikeById(Long likeId) {
        likeRepository.deleteById(likeId);
    }
}
