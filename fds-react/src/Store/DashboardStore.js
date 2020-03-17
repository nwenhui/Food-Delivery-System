
import uuid from 'uuid/v1';
class DashboardStore {
    // Customer Data
    RewardPoints = 1000;
    numOrders = 10
    pastOrders = [
        {
            id: uuid(),
            oid: 'CDD1049',
            amount: 30.5,
            restaurant: {
              name: 'Ekaterina Tankova'
            },
            foodItem: [ 'a', 'b', 'c', 'd'],
            createdAt: 1555016400000,
            payment: 'Cash'
          },
          {
            id: uuid(),
            oid: 'CDD1048',
            amount: 25.1,
            restaurant: {
              name: 'Cao Yu'
            },
            foodItem: [ 'a', 'b', 'c', 'd'],
            createdAt: 1555016400000,
            payment: 'Cash'
          },
          {
            id: uuid(),
            oid: 'CDD1047',
            amount: 10.99,
            restaurant: {
              name: 'Alexa Richardson'
            },
            foodItem: [ 'a', 'b', 'c', 'd'],
            createdAt: 1554930000000,
            payment: 'Cash'
          },
          {
            id: uuid(),
            oid: 'CDD1046',
            amount: 96.43,
            restaurant: {
              name: 'Anje Keizer'
            },
            foodItem: [ 'a', 'b', 'c', 'd'],
            createdAt: 1554757200000,
            payment: 'Credit Card'
          },
          {
            id: uuid(),
            oid: 'CDD1045',
            amount: 32.54,
            restaurant: {
              name: 'Clarke Gillebert'
            },
            foodItem: [ 'a', 'b', 'c', 'd'],
            createdAt: 1554670800000,
            payment: 'Cash'
          },
          {
            id: uuid(),
            oid: 'CDD1044',
            amount: 16.76,
            restaurant: {
              name: 'Adam Denisov'
            },
            foodItem: [ 'a', 'b', 'c', 'd'],
            createdAt: 1554670800000,
            payment: 'Credit Card'
          }
      ];

}

export const dashboardStore = new DashboardStore();