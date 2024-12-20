import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-patient-notifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './patient-notifications.component.html',
  styleUrl: './patient-notifications.component.css'
})


export class PatientNotificationComponent {

  reminders = [
    { message: 'Doctor appointment at 3 PM', date: '2024-11-20 15:00' },
    { message: 'Payment due for your subscription', date: '2024-11-22 00:00' },
    { message: 'Chat with your doctor scheduled for tomorrow', date: '2024-11-19 10:00' }
  ];

  comments = [
    { username: 'John Doe', text: 'Great post!', date: '2024-11-19 14:00' },
    { username: 'Jane Smith', text: 'I totally agree with this!', date: '2024-11-19 15:00' }
  ];

  likes = [
    { username: 'Michael Lee', date: '2024-11-19 13:00' },
    { username: 'Sarah Williams', date: '2024-11-19 14:30' }
  ];

  systemAlerts = [
    { message: 'System maintenance at midnight', date: '2024-11-20 00:00' },
    { message: 'New feature updates available!', date: '2024-11-19 08:00' }
  ];

  // Define type for dropdown keys
  dropdownStates: Record<'reminder' | 'comment' | 'like' | 'alert', boolean> = {
    reminder: false,
    comment: false,
    like: false,
    alert: false,
  };

  // Update method to use the defined keys
  toggleDropdown(section: keyof typeof this.dropdownStates): void {
    this.dropdownStates[section] = !this.dropdownStates[section];
  }
}