<?php
if(isset($_POST['email']) && !empty($_POST['email'])){

    $nome = addslashes($_POST['nome']);
    $email = addslashes($_POST['email']);
    $mensagem = addslashes($_POST['mensagem']);


    $to = "devsamuelm@gmail.com";
    $subject = "Contato - ".$nome;
    $body = "Olá Eduardo, nova mensagem de ".$nome.
    ", do email: ".$email. "\r\n".
    ". Mensagem: \r\n".$mensagem;
    $header = "From:contatoEduardoMachadoL@gmail.com"."\r\n".
                "Reply-To:".$email."\e\n".
                "X=Mailer:PHP/".phpversion();

    if(mail($to, $subject, $body, $header)){
        echo("Email enviado com sucesso!")
    }else{
        echo("Email não enviado!")
    }
}