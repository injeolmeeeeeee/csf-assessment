package vttp.batch4.csf.ecommerce.repositories;

public class Queries {

    public static final String SQL_SAVE_ORDER = """
            insert into orderData(order_id, order_date, address, priority, comments, cart_id)
                value (?, ?, ?, ?, ?, ?)
            """;
}
