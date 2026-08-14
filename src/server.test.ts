import test from 'node:test';
import assert from 'node:assert';
import request from 'supertest';
import { app, server } from './server';


// Dois testes simples pra validação (Não pega todos os casos!)
test("GET /payments - deve retornar a lista de pagamentos", async () => {

    const response = await request(app).get('/payments');

    assert.strictEqual(response.status, 200);
    assert.ok(Array.isArray(response.body));
});

test("POST /payments - deve retornar 201 e criar pagamento", async () => {

    const response = await request(app).post('/payments').send({
        amount: 120,
        currency: "BRL",
        payer: "123456789",
        payee: "123456789"
    })

    assert.strictEqual(response.status, 201);
    assert.strictEqual(response.body.status, 'created');
});

test.after(() => {

    server.close();
});
