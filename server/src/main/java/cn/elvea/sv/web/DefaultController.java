package cn.elvea.sv.web;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class DefaultController {

    @Value("${application.mode}")
    String mode;

    @Value("${application.vite.schema}")
    String viteSchema;

    @Value("${application.vite.host}")
    String viteHost;

    @Value("${application.vite.port}")
    String vitePort;

    @RequestMapping
    public String index(Model model) {
        model.addAttribute("mode", model);
        return "index";
    }

}
