package com.exitflow.terminationservice.aspect;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;



@Aspect
@Component
public class LoggingAspect {
    private final Logger logger = LoggerFactory.getLogger(LoggingAspect.class);

    @Pointcut(value = "execution(* com.exitflow.terminationservice.controller.TerminationController .*(..))")
    public void terminationController(){

    }

    @Before(value = "terminationController()")
    public  void beforeAdviceMethod(JoinPoint joinpoint){
        logger.info("Inside the before advice");
        logger.info("Target method Object {}", joinpoint.getSignature().getName());
    }

    @AfterReturning(value = "terminationController()", returning = "retValue")
    public void afterReturningAdviceMethod(JoinPoint joinpoint, Object retValue){
        logger.info("Inside the after Returning advice");
        logger.info("Target method Object {}" , joinpoint.getSignature().getName());
        logger.info("The returned value is: {}", retValue );
    }


}
