import { Request, Response, NextFunction } from 'express';
import { logger } from '../../common/utils/logger-utils';

export function requestLoggerMiddleware(req: Request, res: Response, next: NextFunction) {
  const start = process.hrtime.bigint();
  const userId = req.user ? (req.user as any)._id : undefined;
  const reqId = req.reqId;
  const route = req.route?.path || req.path;
  const method = req.method;
  const ip = req.ip || req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  logger.info('request received', { reqId, userId, route, method, ip });

  res.on('finish', () => {
    const end = process.hrtime.bigint();
    const latencyMs = Number(end - start) / 1e6;
    logger.info('request completed', {
      reqId,
      userId,
      route,
      method,
      ip,
      status: res.statusCode,
      latencyMs,
    });
  });

  next();
}
