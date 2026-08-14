import express, { Request, Response } from 'express';
import { payments } from './bd';

const app = express();
const port = 3000;

app.use(express.json());

// Interface de Pagamentos
interface PaymentRequest {
    amount: number;
    currency: string;
    payer: string;
    payee: string;
}

// Rota de Pagamentos
app.post("/payments", (req: Request, res: Response) => {
    const { amount, currency, payer, payee } = (req.body || {}) as PaymentRequest;

    // Validações iniciais
    if (!amount) {
        res.status(400).json({ error: 'Valor inválido' });
        return;
    }

    if (!currency) {
        res.status(400).json({ error: 'Moeda inválida' });
        return;
    }
    if (!payer) {
        res.status(400).json({ error: 'Pagador inválido' });
        return;
    }
    if (!payee) {
        res.status(400).json({ error: 'Beneficiário inválido' });
        return;
    }

    if (amount <= 0) {
        res.status(400).json({ error: 'Valor inválido' });
        return;
    }

    // Pagamento
    const payment = {
        amount,
        currency,
        payer,
        payee
    };

    payments.push(payment);

    res.status(201).json({ id: 'pay_001', status: 'created' });
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});