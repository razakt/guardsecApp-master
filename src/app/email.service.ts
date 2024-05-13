import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private url = "https://mailthis.to/confirm"

  constructor(private http: HttpClient) { }


  public sendMail(formData){
    console.log("send");
    const headers = new Headers({
        'Content-Type' : 'application/json'
    });

   return this.http.post("https://formspree.io/f/mnqewlvb", 
        {
            name: formData.fullname,
            _replyto: formData.email,
            message: formData.message
        }
    )
}

public subscribeMail(mailId){
  console.log("send");
  const headers = new Headers({
      'Content-Type' : 'application/json'
  });

 return this.http.post("https://formspree.io/f/mnqewlvb", 
      {
          name: "unknown user",
          _replyto: mailId,
          message: "subscribed"
      }
  )
}

}
