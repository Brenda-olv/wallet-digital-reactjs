<?php
    header("Access-Control-Allow-Origin: *");
    $request = json_decode(file_get_contents('php://input'), true);

    http_response_code(200);
    echo json_encode([
        "user" => [
            "id" => 1,
            "name" => "Billy Johnson",
            "email" => "billy@teste.com"
        ],
        "wallet" => [
            "amount" => 2352,
            "transactions" => [
                [
                    "id" => 1,
                    "date_month" => "maio",
                    "date_day" => "09",
                    "action" => "Pagamento Recebido",
                    "type" => "received",
                    "amount" => 50.55
                ],
                [
                    "id" => 2,
                    "date_month" => "maio",
                    "date_day" => "12",
                    "action" => "Transferência Efetuada",
                    "type" => "withdraw",
                    "amount" => 500.3
                ],
                [
                    "id" => 3,
                    "date_month" => "maio",
                    "date_day" => "19",
                    "action" => "Transferência Recebida",
                    "type" => "received",
                    "amount" => 150.2
                ],
                [
                    "id" => 4,
                    "date_month" => "junho",
                    "date_day" => "01",
                    "action" => "Pagamento Recebido",
                    "type" => "received",
                    "amount" => 1500
                ],
            ]
        ]
    ]);
