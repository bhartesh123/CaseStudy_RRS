//package com.ticket.TicketOrderService;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.http.HttpMethod;
//import org.springframework.security.authorization.AuthenticatedAuthorizationManager;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.NoOpPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
//@Configuration
//@EnableWebSecurity
//public class Security extends WebSecurityConfigurerAdapter{
//	@Override
//	protected void configure(HttpSecurity http)throws Exception{
//		http
//		.csrf().disable()
//				.formLogin().disable()
//		.authorizeRequests()
//				.antMatchers("/booking/booked/").permitAll()
//		.antMatchers("/booking/addBooking/","/booking/update/","/booking/del/").hasRole("ADMIN")
//		.anyRequest()
//		.authenticated()
//		.and()
//		.httpBasic();
//	}
//	@Override
//	protected void configure(AuthenticationManagerBuilder auth)throws Exception {
//		auth.inMemoryAuthentication().withUser("Bhartesh").password(this.pass().encode("Bhartesh19")).roles("ADMIN");
//		auth.inMemoryAuthentication().withUser("Siddu").password(this.pass().encode("sid14")).roles("USER");
//		//auth.inMemoryAuthentication().withUser("Titiksha").password("Titu14").roles("USER");
//	}
//	 @Bean
//	    public PasswordEncoder pass(){
//		 	//return NoOpPasswordEncoder.getInstance();
//	        return new BCryptPasswordEncoder(15);
//	    }
//}
