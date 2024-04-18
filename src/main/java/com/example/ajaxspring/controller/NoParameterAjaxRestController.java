package com.example.ajaxspring.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class NoParameterAjaxRestController {

    @RequestMapping("/simple-ajax-test1")
    public String getWithNoParameter1() {
        return "XHR 객체를 사용한 GET 요청1";
    }

    @RequestMapping("/simple-ajax-test2")
    public String getWithNoParameter2() {
        return "fetch() 함수를 사용한 GET 요청2";
    }
}
