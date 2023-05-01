resource "azurerm_resource_group" "dapp" {
  name     = var.app_name
  location = var.location
}
