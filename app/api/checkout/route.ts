import mercadopago from 'mercadopago'
import { CreatePreferencePayload } from 'mercadopago/models/preferences/create-payload.model'
import { PreferenceCreateResponse } from 'mercadopago/resources/preferences'

mercadopago.configure({
    access_token: process.env.MP_ACCESS_TOKEN as string,
})

export async function POST(req: Request) {
    const { title, price } = await req.json()

    let preferences: CreatePreferencePayload = {
        items: [
            {
                title: title,
                unit_price: price,
                quantity: 1,
            }
        ],
        back_urls: {
            success: 'http://localhost:3000',
            failure: 'http://localhost:3000',
            pending: 'http://localhost:3000',
        },
        auto_return: 'approved',
    }

    mercadopago.preferences.create(preferences).then((response: PreferenceCreateResponse) => {
        
    })
}