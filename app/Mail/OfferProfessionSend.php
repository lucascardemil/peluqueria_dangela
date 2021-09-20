<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class OfferProfessionSend extends Mailable /*implements ShouldQueue*/
{
    use Queueable, SerializesModels;

    public $profession;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($profession)
    {
        $this->profession = $profession;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject('Oferta dangela')
                //->view('layouts.email');
                ->markdown('mail.offerProfession.index');
    }
}
