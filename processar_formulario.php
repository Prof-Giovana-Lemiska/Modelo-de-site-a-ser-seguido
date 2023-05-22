<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $para = "lemiska.giovana@escola.pr.gov.br";
    $assunto = "Nova mensagem do formulário de contato";
    $remetente = $_POST['email'];
    $nome = $_POST['nome'];
    $mensagem = $_POST['mensagem'];

    $mensagem_formatada = "Nome: $nome\n";
    $mensagem_formatada .= "E-Mail: $remetente\n\n";
    $mensagem_formatada .= "Mensagem:\n$mensagem";

    $headers = "From: $remetente";

    mail($para, $assunto, $mensagem_formatada, $headers);

    // Redireciona o usuário para uma página de confirmação
    header('Location: confirmacao.html');
    exit();
}
?>
