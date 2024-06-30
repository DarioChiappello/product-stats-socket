import { WebSocketGateway, WebSocketServer, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Product } from '../models/product.model';

@WebSocketGateway({ cors: '*:*' })
export class ProductGateway {
  @WebSocketServer()
  server: Server;

  async handleConnection(client: Socket) {

  }

  async handleDisconnect(client: Socket) {

  }

  @SubscribeMessage('updatePrice')
  emitProductUpdate(product: Product) {
    this.server.emit(`product/${product._id}`, product);
  }

}
