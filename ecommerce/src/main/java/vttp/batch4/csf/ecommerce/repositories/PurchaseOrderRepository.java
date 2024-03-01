package vttp.batch4.csf.ecommerce.repositories;

import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import vttp.batch4.csf.ecommerce.models.Order;

@Repository
public class PurchaseOrderRepository {

  @Autowired
  private JdbcTemplate template;

  // IMPORTANT: DO NOT MODIFY THIS METHOD.
  // If this method is changed, any assessment task relying on this method will
  // not be marked
  // You may only add Exception to the method's signature
  public void create(Order order) {
    // TODO Task 3

    Document doc = new Document();
    doc.append("orderId", order.getOrderId())
        .append("date", order.getDate())
        .append("name", order.getName())
        .append("address", order.getAddress())
        .append("priority", order.getPriority())
        .append("comments", order.getComments())
        .append("cart", order.getCart());
    
    template.update(Queries.SQL_SAVE_ORDER, order.getOrderId(), order.getDate(), order.getAddress(), order.getPriority(), order.getComments());
  }
}
