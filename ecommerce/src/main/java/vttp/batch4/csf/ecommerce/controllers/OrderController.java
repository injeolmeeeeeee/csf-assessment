package vttp.batch4.csf.ecommerce.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestPart;

import vttp.batch4.csf.ecommerce.models.Cart;
import vttp.batch4.csf.ecommerce.models.Order;
import vttp.batch4.csf.ecommerce.services.PurchaseOrderService;

@Controller
public class OrderController {

  @Autowired
  private PurchaseOrderService poSvc;

  // IMPORTANT: DO NOT MODIFY THIS METHOD.
  // If this method is changed, any assessment task relying on this method will
  // not be marked
  @PostMapping("/checkout")
  public ResponseEntity<String> postOrder(@RequestPart String name,
      @RequestPart String address,
      @RequestPart boolean priority,
      @RequestPart String comments,
      @RequestPart Cart cart) {

    // TODO Task 3
    Order order = new Order();
    order.setName(name);
    order.setAddress(address);
    order.setPriority(false);
    order.setComments(comments);
    order.setCart(cart);

    try {
      poSvc.createNewPurchaseOrder(order);
      return ResponseEntity.ok(order.getOrderId());
    } catch (Exception e) {
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
          .body("Error message: " + e.getMessage());
    }

  }
}