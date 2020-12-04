import { Server, Response } from 'miragejs'

new Server({
        seeds(server){
            server.db.loadData({
                orders:[
                    {
                        status:{
                            name: 'Delivered Today',
                            icon:'ok.svg',
                            type:'delivered',
                        },
                        details:{
                            img: 'item_1.png',
                            title:'Windproof Touchscreen Glove',
                            purchased: '3 months ago',
                            id:'83620262',
                            storeName:'Star Buy Store',
                            price: 39.99,
                            orderInfo:'Chargeback',
                            disputeLink:'#',
                            orderDate:' Aug 25, 2018 5:17 PM',
                            menuItems:[
                                'Print Invoice',
                                'Download invoice',
                                'Go to Transaction',
                                'Review Product',
                                'Archive Order'
                            ]
                        },
                    },
                    {
                        status:{
                            name: 'Shipped' ,
                            icon:'shipped_icon.svg',
                            type:'shipped',
                        },
                        details:{
                            img: 'item_2.png',
                            title:'Windproof Touchscreen Glove',
                            purchased: 'Yesterday',
                            id:'83620262',
                            storeName:'Star Buy Store',
                            price: 39.99,
                            orderInfo:'Refunded',
                            disputeLink:'#',
                            orderDate:' Aug 25, 2018 5:17 PM',
                            menuItems:[
                                'Print Invoice',
                                'Download invoice',
                                'Go to Transaction',
                                'Archive Order'
                            ]
                        }
                    },
                    {
                        status:{
                            name: 'Awaiting Shipment' ,
                            icon:'awaiting_icon.svg',
                            type:'awaiting',
                        },
                        details:{
                            img: 'item_3.png',
                            title:'Anti-Slip Shoe Grips',
                            purchased: 'Today',
                            id:'83620262',
                            storeName:'Star Buy Store',
                            price: 39.99,
                            orderInfo:'Chargeback',
                            disputeLink:'#',
                            orderDate:' Aug 25, 2018 5:17 PM',
                            menuItems:[
                                'Download invoice',
                                'Go to Transaction',
                                'Review Product',
                                'Archive Order'
                            ]
                        }
                    },
                    {
                        status:{
                            name: 'Delivered' ,
                            icon:'ok.svg',
                            type:'delivered',
                        },
                        details:{
                            img: 'item_1.png',
                            title:'Swarm Software',
                            purchased: '3 months ago',
                            id:'83620262',
                            storeName:'Star Buy Store',
                            price: 39.99,
                            orderInfo:'Refunded',
                            disputeLink:'#',
                            orderDate:' Aug 25, 2018 5:17 PM',
                            menuItems:[
                                'Print Invoice',
                                'Download invoice',
                                'Go to Transaction',
                                'Review Product',
                                'Archive Order'
                            ]
                        }
                    },
                    {
                        status:{
                            name: 'Arriving Tomorrow' ,
                            icon:'arriving_icon.svg',
                            type:'arriving',
                        },
                        details:{
                            img: '',
                            title:'Windproof Touchscreen Glove',
                            purchased: '2 weeks ago',
                            id:'83620262',
                            storeName:'Star Buy Store',
                            price: 39.99,
                            orderInfo:'Chargeback',
                            disputeLink:'#',
                            orderDate:' Aug 25, 2018 5:17 PM',
                            menuItems:[
                                'Print Invoice',
                                'Download invoice',
                                'Go to Transaction',
                                'Review Product',
                                'Archive Order'
                            ]
                        }
                    },
                    {
                        status:{
                            name: 'Incomplete Purchase' ,
                            icon:'error.svg',
                            type:'incomplete',
                        },
                        details:{
                            img: 'item_2.png',
                            title:'Anti-Slip Shoe Grips',
                            purchased: '3 months ago',
                            id:'83620262',
                            storeName:'Star Buy Store',
                            price: 39.99,
                            orderInfo:'Refunded',
                            disputeLink:'#',
                            orderDate:' Aug 25, 2018 5:17 PM',
                            menuItems:[
                                'Go to Checkout Page',
                                'Remove Purchase',
                            ]
                        }
                    },
                    {
                        status:{
                            name: 'Awaiting Pickup' ,
                            icon:'awaiting_icon.svg',
                            type:'incomplete',
                        },
                        details:{
                            img: 'item_4.png',
                            title:'Cordless Angle Grinding ',
                            purchased: '2 years ago',
                            id:'83620262',
                            storeName:'Star Buy Store',
                            price: 39.99,
                            orderInfo:'Chargeback',
                            disputeLink:'#',
                            orderDate:' Aug 25, 2018 5:17 PM',
                            menuItems:[
                                'Print Invoice',
                                'Download invoice',
                                'Go to Transaction',
                                'Review Product',
                                'Archive Order'
                            ]
                        }
                    }
                ]
            })
        },

        routes() {
            this.timing = 50
            this.namespace = 'api'

            this.get('/orders', (schema) => {
                return schema.db.orders
            })
        }
    })