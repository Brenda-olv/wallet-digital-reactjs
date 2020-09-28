<?php
    header('Access-Control-Allow-Origin: *');
    
    // $request = json_decode(file_get_contents('php://input'), true);

    // if ($request['email'] === 'billy@teste.com' && $request['pass'] === 'teste') {
        http_response_code(200);
        echo json_encode([
            "user" => [
                "id" => 1,
                "name" => "Billy Johnson",
                "email" => "billy@teste.com"
            ]
        ]);
    // } else {
    //     http_response_code(403);
    //     echo json_encode([
    //         "message" => "Credenciais invalidas"
    //     ]);
    // }