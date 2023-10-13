package com.exitflow.authservice.services;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class JwtGeneratorService {

    @Value("${jwt.secret.key}")
    private String secretKey;

    public static final long VALIDITY_PERIOD=180*60*1000;
    public  String generateToken(String email){
        return Jwts.builder()
                .setExpiration(new Date(System.currentTimeMillis()+VALIDITY_PERIOD))
                .setIssuedAt(new Date())
                .setSubject(email)
                .setIssuer("com.exitflow")
                .signWith(SignatureAlgorithm.HS512,secretKey)
                .compact();

    }

}
