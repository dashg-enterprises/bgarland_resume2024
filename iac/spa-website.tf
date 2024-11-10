terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.59.0"
    }
  }

  required_version = ">= 1.2.0"
}

module "spa_on_aws" {
  source = "git::https://github.com/dashg-enterprises/cloud-platform.git//modules/spa-website/aws?ref=main" #"../../cloud-platform/src/modules/spa-website/aws"#"https://github.com/dashg-enterprises/cloud-platform.git//src/modules/aws/spa-website"
  dist_folder_path = "../dist"
  application_name = "bgarland-${var.environment}"
  hosted_zone_id = "Z03829103FGKVJE6VHSAF"
  domain = "begarland.com"
  subdomain = var.environment_subdomain
}