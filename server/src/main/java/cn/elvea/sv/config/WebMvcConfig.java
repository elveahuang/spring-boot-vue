package cn.elvea.sv.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/app/webapp").setViewName("forward:/index.html");
        registry.addViewController("/app/admin").setViewName("forward:/admin.html");
        registry.addViewController("/app/webapp/{path:[^.]*}").setViewName("forward:/index.html");
        registry.addViewController("/app/admin/{path:[^.]*}").setViewName("forward:/admin.html");
    }

}
