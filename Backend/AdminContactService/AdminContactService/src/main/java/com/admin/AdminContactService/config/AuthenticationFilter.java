package com.admin.AdminContactService.config;


import com.admin.AdminContactService.Services.UserService;
import com.admin.AdminContactService.utils.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
@Service
@Component
public class AuthenticationFilter extends OncePerRequestFilter {
    @Autowired
    private UserService userService;
    @Autowired
    private JwtUtils jwtUtils;
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String authorizationHeader=request.getHeader("Authorization");
        String username=null;
        //String password=null;
        String jwtToken=null;
        if(authorizationHeader !=null && authorizationHeader.startsWith("bearer ")){
            jwtToken=authorizationHeader.substring(7);
            try{
              username=jwtUtils.extractUsername(jwtToken);
            }catch (Exception e){
                e.printStackTrace();
            }
            if(username!=null && SecurityContextHolder.getContext().getAuthentication()==null){
                UserDetails currentUser=userService.loadUserByUsername(username);
                UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken= new UsernamePasswordAuthenticationToken(currentUser,null,currentUser.getAuthorities());

                usernamePasswordAuthenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

                SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
            }
            else {
                System.out.println("Token is Not Valid");
            }

        }
        filterChain.doFilter(request,response);
    }
}
