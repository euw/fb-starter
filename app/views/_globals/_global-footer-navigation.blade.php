<div class="text-center">
    <div class="btn-group">
        <button class="btn btn-link" data-toggle="modal" data-target=".modal-terms">Teilnahmebedingungen</button>
        <button class="btn btn-link" data-toggle="modal" data-target=".modal-privacy">Datenschutzbestimmungen</button>
    </div>
</div>

@include('_partials._modal', ['modalClass' => 'modal-terms', 'title' => 'Teilnahmebedingungen', 'body' => $texts->terms_of_use ])
@include('_partials._modal', ['modalClass' => 'modal-privacy', 'title' => 'Datenschutzbestimmungen', 'body' => $texts->privacy_policy ])