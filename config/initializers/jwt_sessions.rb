JWTSessions.encryption_key = Rails.application.credentials.dig(:jwt_key_secret)
JWTSessions.token_store = :redis, { redis_url: 'redis://127.0.0.1:6379/0' }