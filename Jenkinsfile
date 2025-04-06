pipeline {
    agent any

    environment {
        IMAGE_NAME = "sicei-apprest"
        CONTAINER_NAME = "apprest-sicei"
    }

    stages {

        stage('Detener contenedor anterior') {
            steps {
                sh "docker stop ${CONTAINER_NAME} || true"
                sh "docker rm ${CONTAINER_NAME} || true"
            }
        }

        stage('Construir imagen Docker') {
            steps {
                sh "docker build -t ${IMAGE_NAME}-${BUILD_ID} ."
            }
        }

        stage('Ejecutar nueva imagen') {
            steps {
                sh "docker run --name ${CONTAINER_NAME} -d -p 3000:3000 ${IMAGE_NAME}-${BUILD_TAG}"
            }
        }
    }
}
