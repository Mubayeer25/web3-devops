resource "kubernetes_deployment" "geth" {
  metadata {
    name = "geth-node"
  }
  spec {
    template {
      spec {
        container {
          image = "ethereum/client-go:v1.13.5"
          args  = ["--metrics", "--syncmode=light"]
        }
      }
    }
  }
}