pipeline {
    agent any

    environment {
        DOCKER_REGISTRY = 'sakethmirchi/event-driven-ecommerce'
        DOCKER_IMAGE_PREFIX = "${DOCKER_REGISTRY}/${env.JOB_NAME}"
        KUBECONFIG = credentials('kubeconfig-credential-id') // Kubeconfig for Kubernetes
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/Saketh-09/event-driven-ecommerce.git'
            }
        }

        stage('Build Services') {
            parallel {
                stage('Build Auth Service') {
                    steps {
                        dir('auth-service') {
                            echo "Building Auth Service..."
                            sh 'npm install'
                            sh 'npm run build'
                        }
                    }
                }
                stage('Build Product Service') {
                    steps {
                        dir('product-service') {
                            echo "Building Product Service..."
                            sh 'npm install'
                            sh 'npm run build'
                        }
                    }
                }
                stage('Build Order Service') {
                    steps {
                        dir('order-service') {
                            echo "Building Order Service..."
                            sh 'npm install'
                            sh 'npm run build'
                        }
                    }
                }
                stage('Build Payments Service') {
                    steps {
                        dir('payments-service') {
                            echo "Building Payments Service..."
                            sh 'npm install'
                            sh 'npm run build'
                        }
                    }
                }
            }
        }

        stage('Dockerize Services') {
            parallel {
                stage('Dockerize Auth Service') {
                    steps {
                        dir('auth-service') {
                            sh "docker build -t ${DOCKER_IMAGE_PREFIX}/auth-service:${env.BUILD_NUMBER} ."
                        }
                    }
                }
                stage('Dockerize Product Service') {
                    steps {
                        dir('product-service') {
                            sh "docker build -t ${DOCKER_IMAGE_PREFIX}/product-service:${env.BUILD_NUMBER} ."
                        }
                    }
                }
                stage('Dockerize Order Service') {
                    steps {
                        dir('order-service') {
                            sh "docker build -t ${DOCKER_IMAGE_PREFIX}/order-service:${env.BUILD_NUMBER} ."
                        }
                    }
                }
                stage('Dockerize Payments Service') {
                    steps {
                        dir('payments-service') {
                            sh "docker build -t ${DOCKER_IMAGE_PREFIX}/payments-service:${env.BUILD_NUMBER} ."
                        }
                    }
                }
            }
        }

        stage('Push Docker Images') {
            parallel {
                stage('Push Auth Service') {
                    steps {
                        sh "docker push ${DOCKER_IMAGE_PREFIX}/auth-service:${env.BUILD_NUMBER}"
                    }
                }
                stage('Push Product Service') {
                    steps {
                        sh "docker push ${DOCKER_IMAGE_PREFIX}/product-service:${env.BUILD_NUMBER}"
                    }
                }
                stage('Push Order Service') {
                    steps {
                        sh "docker push ${DOCKER_IMAGE_PREFIX}/order-service:${env.BUILD_NUMBER}"
                    }
                }
                stage('Push Payments Service') {
                    steps {
                        sh "docker push ${DOCKER_IMAGE_PREFIX}/payments-service:${env.BUILD_NUMBER}"
                    }
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                echo "Deploying all services to Kubernetes..."
                sh "kubectl apply -f kubernetes/"
            }
        }
    }

    post {
        success {
            echo "Pipeline executed successfully!"
        }
        failure {
            echo "Pipeline execution failed!"
        }
    }
}