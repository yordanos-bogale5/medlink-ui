import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../landing-page/footer/footer.component';
import { NotificationDComponent } from '../notification/notification.component';
import { BlogComponent } from '../blog/blog.component';
import { ChatComponent } from '../chat/chat.component';
import { ContactComponent } from '../contact/contact.component';
import { AppointmentComponent } from '../appointment/appointment.component';

@Component({
  selector: 'app-docter-role',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    FooterComponent,
    NotificationDComponent,
    BlogComponent,
    ChatComponent,
    ContactComponent,
    AppointmentComponent,
  ],
  templateUrl: './docter-role.component.html',
  styleUrl: './docter-role.component.css',
})
export class DocterRoleComponent implements OnInit {
  doctor = 'Dr. X';
  specialitiy = 'Cardiology';
  onPro = false;
  comments = [{ title: 'test', content: 'teston is testing' }];

  //nav mob
  ham: HTMLElement | null = null;
  off: HTMLElement | null = null;
  nav: HTMLElement | null = null;

  ngOnInit() {
    // Access the buttons by their IDs once the view is initialized
    this.ham = document.getElementById('btnham');
    this.off = document.getElementById('btnclose');
    this.nav = document.querySelector('.nav');
  }

  onMenu() {
    if (this.ham && this.off && this.nav) {
      this.ham.classList.add('hidden');
      this.ham.classList.remove('active');
      this.off.classList.add('active');
      this.off.classList.remove('hidden');
      this.nav.classList.add('active');
      this.nav.classList.remove('hidden');

      // this.nav.classList.add('mt-6');
      // this.nav.classList.add('mr-4');
      this.nav.classList.add('translate-y-5');
    }
  }

  offMenu() {
    if (this.ham && this.off && this.nav) {
      this.ham.classList.add('active');
      this.ham.classList.remove('hidden');
      this.off.classList.add('hidden');
      this.off.classList.remove('active');
      this.nav.classList.add('hidden');
      this.nav.classList.remove('active');

      // this.nav.classList.remove('mt-6');
      // this.nav.classList.remove('mr-4');
      this.nav.classList.remove('translate-y-5');
    }
  }

  //nav-bar view
  scrollTo(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;

      window.scrollTo({
        top: elementPosition - 70, // Adjust the offset here
        behavior: 'smooth',
      });
      this.offMenu();
    }
  }

  //profile
  onProfile = true;
  onEditing = false;
  profileDiv = document.querySelector('.main') as HTMLElement;
  profile() {
    this.onProfile = !this.onProfile;
  }

  onClose() {
    this.onProfile = true;
    this.offMenu();
    this.offEdit();
  }

  onEdit() {
    this.onEditing = true;
  }
  offEdit() {
    this.onEditing = false;
  }
  logout() {
    window.location.href = '';
  }
}
