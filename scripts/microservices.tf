locals {
    login_server = azurerm_container_registry.container_registry.login_server
    username = azurerm_container_registry.container_registry.admin_username
    password = azurerm_container_registry.container_registry.admin_password
}

module "gateway-microservice" {
    source ="./modules/microservice"
    service_name = "gateway"
    service_type = "LoadBalancer"
    session_affinity = "ClientIP"
    login_server = local.login_server
    username = local.username
    password = local.password
    app_version = var.app_version
    env = {
        DBURL: "mongodb://db:27017/users"
        JWT_ACCESS_SECRET = var.JWT_ACCESS_SECRET
        JWT_REFRESH_SECRET = var.JWT_REFRESH_SECRET
        PRODUCTION: true
    }
}

module "translation-microservice" {
    source ="./modules/microservice"
    service_name = "translation"
    login_server = local.login_server
    username = local.username
    password = local.password
    app_version = var.app_version
    env = {
        YANDEX_TOKEN = var.YANDEX_TOKEN
        YANDEX_FOLDER_ID = var.YANDEX_FOLDER_ID
    }
}

module "chats-microservice" {
    source ="./modules/microservice"
    service_name = "chats"
    service_type = "LoadBalancer"
    session_affinity = "ClientIP"
    login_server = local.login_server
    username = local.username
    password = local.password
    app_version = var.app_version
}
