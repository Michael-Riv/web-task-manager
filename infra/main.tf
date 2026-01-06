

#choosing provider
terraform {
    required_providers {
        aws = {
            source = "hashicorp/aws"
            version = "~> 6.0"
        }
    }
}

provider "aws" {
    region = "us-east-1"  
}

#Security group config
resource "aws_security_group" "ssh_sg" {
    name = "ssh_sg"
    description = "A security group for allowing ssh access"

    ingress  { #inbound
        from_port = 22
        to_port = 22
        protocol = "tcp"
        cidr_blocks = ["0.0.0.0/0"]
    }
    egress  { #outbound
        from_port = 0
        to_port = 0
        protocol = "-1"
        cidr_blocks = ["0.0.0.0/0"]
    }
}
#ec2 instance
resource "aws_instance" "testec2" {
    ami = "ami-068c0051b15cdb816" # amazong-linux 2023
    instance_type = "t2.micro"
    vpc_security_group_ids = [
        aws_security_group.ssh_sg.id

    ]
    tags = {
        name = "tf-demo"
    }
    
}