<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class OfferUserSend extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    public $user, $percentage, $date;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($user, $percentage, $date)
    {
        $this->user = $user;
        $this->percentage = $percentage;
        $this->date = $date;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject('Oferta Dangela')
                //->view('layouts.email');
                ->markdown('mail.offerUser.index');
    }
}
