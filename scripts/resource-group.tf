resource "azurerm_resource_group" "d-app" {
  name     = var.app_name
  location = var.location
}
