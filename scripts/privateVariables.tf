variable client_id { #for service principal

}

variable client_secret { #for service principal and azurerm provider

}

variable subscription_id { #for service principal and azurerm provider

}

variable tenant_id { #for service principal and azurerm provider

}

variable TRANSLATE_CREDENTIALS {
  default = {"type": "service_account", "project_id": "inapp-382011", "private_key_id": "a6b708e2c027a5da0c28ac6a203c99bf9bef4f04", "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDDZywvXnD4ybuC\ng864eMQpN7Kz7jf38RnyhprxBp+GOYVFRF7k562b5JUvQXHww4KsmBEjOeu5qOtn\nUx2BDgYfsHMeN5VO8F4Rowqzb1FaPkwkbVpcFByJ0187Fgo0i6amwxhXLdUBNuia\nQyFA8qeg3kwfw8/b+aCGzW0kh7aDi+HBjODJ+h0txa/Gw8HCBCehsHtHZl9hRAZs\nER4lE8pXIuh2jD+BbzeGFAXZauqcB5zU51GzFwmh/eyHrUuMpaw1ETEXCsoUKUNM\nsNu1etq22wdVlOnBRsKx3bbw9T7UbsOZeDuS7bVPfh0JUzHAMCWxpzwnXbQ/MMNf\nfHHRNShHAgMBAAECggEAL/mUSRsEXKjW70/iQLtx2fbRWsjpl+frqXZv8y5fm0pj\nFKMZM1VIdCZ2lFAao/S0kCCT0JTHceFtzoQDEez6BuzBDtGxyFxOlED1/yEdFa2G\n70ij70iGyzYIww6Bue3xoC71Om5HxlEPYdSKhRIuotoBUak3Tvhmd8JXAimJ35jZ\nbVKNs1WbU2eFW3etFwTCFJh7K5I2SZ/zMFl/h9NdMUkziMXhcFzy3MKW4VD7p4C8\n49L6XzeJQ5jvIiI+957IK3h5bBECvmTI+KgxjhDyZATl4Mwz2U5ElqSSNsKgr6Wb\niaVql3x8yiMWlnlgU6NrVCsFDBtzYIzk47/wsDXOzQKBgQD6tTTAPHRIfLcyQOCP\n8mq4YhpPTiN+yzle/1KYlPQhSc5ows86D469dwdyTGZpWhDn0jD+SPY0tJe2LgO3\nFzE6bpFAAJEcDGj8h7Ojuh6uH2CfOzJLld5388tBWZJIY6ZOuR0pBaRmeOKUIB2r\nDoyA4RjZMkeceM3P+FzJSirFvQKBgQDHhxsu+h6eu49FDPR40G/iTc8mNJl4QkF3\nifGuqU2NcBfYQ/zhc9fyCGhPriT4Qb4f9OmRoKc/bUPNoSXkI2UgXijeM7P8LH6q\nbDl9iUsQS9pw7AvJYYoSEosz4r0oSEFs5LtTAUDOwLei4hDplROstm0pvCkKvJbw\nDS3b5gX8UwKBgC4el42lkV6kUq8T8DuKxMcWhPCB11XD3NH09iTLgf19rlLnQ2fS\n5NdFxkDofQ50WxfKOukMUv5vGlmRLW3I/m1ZWa8Ea61VOxr5e7pqyqoNa6DfKuls\nsHgwiPuElrxqWHWy6AJb31pacpP9NHf7PS2YOxH5heLq9jGD5s3Arw2hAoGAAvM7\ncqleFIi/aIz1fGfQj68I1g7HCiEoqKTQfv2f2OyEXb07mvXEhp6bNDpl74nBTuWn\nInEWp/hsnTi5v7LKRv09a3OmQJ9DzC9HdlS2WGpWs365+eNIUFYX2s+KbnMLDJoh\nLuwA0k3FKVJgX6PFo7Ma0BgpHzCEps37FJpFEmMCgYEArSQXAd3yHZvCgwTE1b16\nIxXWHwvQQcZ35x2Ib/+Okc9KNHrc2q38nC4zG1x/m/UNIUNGCbIsHz6L2cGae1jD\nmC1bO0HYKtsHPKLp7wR8HTDG2MZgIw+7FhPL7bjGZ8vFIxmW7q18lIgWadjdZsyj\nBKh1rBVAVJ6HzCiLxUmjcgQ=\n-----END PRIVATE KEY-----\n", "client_email": "d-app-service-account@inapp-382011.iam.gserviceaccount.com", "client_id": "108570677268209988302", "auth_uri": "https://accounts.google.com/o/oauth2/auth", "token_uri": "https://oauth2.googleapis.com/token", "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs", "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/d-app-service-account%40inapp-382011.iam.gserviceaccount.com"}
}

variable JWT_ACCESS_SECRET {
  default = "JWT_ACCESS_SECRET"
}

variable JWT_REFRESH_SECRET {
  default = "JWT_REFRESH_SECRET"
}