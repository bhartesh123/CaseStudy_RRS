package com.RailwayReservationApi_Gateway.RailwayReservationApi_Gateway;

import org.springframework.context.annotation.Configuration;

import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@EnableWebSecurity
public class Security extends  WebSecurityConfigurerAdapter {
    @Override
    protected void configure(HttpSecurity http) throws Exception {
     
        http
                .authorizeRequests()
                .antMatchers("/trains/**","/contacts/**").hasRole("ADMIN")
                .antMatchers("/search/**","/booking/**").permitAll()
                .anyRequest()
                .authenticated()
                .and()
                .httpBasic();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        //super.configure(auth);
        auth.inMemoryAuthentication().withUser("Bhartesh").password(this.passwordEncoder().encode("Bhartesh19")).roles("ADMIN");
        auth.inMemoryAuthentication().withUser("Siddu").password(this.passwordEncoder().encode("sid19")).roles("USER");
    }
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder(10);
    }
}
