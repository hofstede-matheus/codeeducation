FROM golang:1.16 as builder

WORKDIR /go/src/app
COPY . .

RUN go build -v

FROM busybox:uclibc

WORKDIR /go/src/app

COPY --from=builder /go/src/app .

CMD [ "./desafio-go" ]