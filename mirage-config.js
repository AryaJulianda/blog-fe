import { createServer } from 'miragejs';

export function makeServer() {
  const server = createServer({
    routes() {
      this.namespace = 'api';

      this.get('/dashboard', () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({
              allExpenses: {
                monthly: {
                  income: '600,00',
                  expenses: '223,72',
                  balance: '376,28',
                  month: 'october',
                  year: 2023
                },
                yearly: {
                  income: '6000,00',
                  expenses: '3000,00',
                  balance: '3000,00',
                  year: 2023
                },
              },
              myCard: [
                {
                  name: 'Jeffry Nichol',
                  number:'0918 8124 0042 8129',
                  exp: '11/25 - 124',
                  current_month:'October',
                  current_year:'2023',
                  history_monthly: [
                    {
                      category:'expenses',
                      description: 'Car Installments',
                      date:'3 October 2023',
                      amount: '223,72'
                    },
                    {
                      category:'income',
                      description: 'Salary',
                      date:'11 October 2023',
                      amount: '500,00'
                    },
                  ]
                },
                {
                  name: 'Jeffry Nichol',
                  number:'8343 0918 0654 8143',
                  exp: '10/24 - 124',
                  current_month:'October',
                  current_year:'2023',
                  history_monthly: [
                    {
                      category:'income',
                      description: 'Freelance Project',
                      date:'5 October 2023',
                      amount: '100,00'
                    },
                  ]
                },
                {
                  name: 'Jeffry Nichol',
                  number:'3424 8453 3235 3570',
                  exp: '3/27 - 124',
                  current_month:'October',
                  current_year:'2023',
                  history_monthly: [],
                }
              ],    
            });
          }, 5000);
        });
      });
    },
  });

  return server;
}
