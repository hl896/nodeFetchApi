select BROKER_ID, Name, count(CUSTOMER.BROKER_ID) as number_of_customers from BROKER
left join CUSTOMER on (Broker.BROKER_ID = Customer.BROKER_ID)
group by 
    BROKER.number_of_customers,
    BROKER.Name